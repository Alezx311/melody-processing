import { Box, Button, Card, DropButton, TableRow } from 'grommet'
import { Cute } from 'react-cute'
import * as Tone from 'tone'
import { SAMPLES } from '../../utils/files'
import { Random } from '../../utils/helpers'
import { SvgUtils } from '../../utils/svg'

// TODO find a way to work without global variable
let synth

// TODO Refactor to NORMAL components!
const DropSelect = ({ label, value, options, onClick }) => {
  const dropAlign = { top: 'bottom', right: 'right' }
  const dropContent = options.map(v => <Button key={v} label={v} onClick={() => onClick(v)} />)
  return <DropButton label={`${label}: ${value}`} dropAlign={dropAlign} dropContent={dropContent} />
}

export const Guitar = props => {
  const { state, reducer } = props
  const opened = GUITAR_TUNINGS[state.tuning]
  const octaved = opened.map(v => Random.noteStep(v, 12))
  const stringNotes = [...opened, ...octaved].filter((v, i) => i < state.strings).reverse()
  const ContentView = () => (
    <Card>
      <Cute src={{ content: state.content, valueOnPlay: state.valueOnPlay }} />
    </Card>
  )

  const setInstrument = instrument => {
    const urlEntries = Object.entries(SAMPLES[instrument]).map(([k, v]) => [k, `/samples/${instrument}/${v}`])
    const samples = Object.fromEntries(urlEntries)
    synth = new Tone.Sampler(samples).toDestination()
    reducer({ synthName: null, instrumentName: instrument })
  }

  const generateRiff = () => {
    const { rootNote, scale, size } = state
    reducer({ riff: Random.melody(rootNote, scale, size) })
  }

  const Fretboard = () =>
    stringNotes.map(open => (
      <Box key={open} direction="row" gap="small">
        {Random.noteSteps(open, state.frets).map(note => (
          <Button
            key={note}
            size="small"
            label={note}
            onClick={() => {
              reducer({ rootNote: note })
              synth.triggerAttackRelease(note, '4n')
            }}
          />
        ))}
      </Box>
    ))

  const BlissWords = ({ src }) => (
    <table>
      <tr>
        {src.map(word => (
          <td key={`label_${word}`}>
            <p>{word}</p>
          </td>
        ))}
      </tr>
      <tr>
        {src.map(word => (
          <td key={`image_${word}`}>
            <SvgImage src={`${SVG_FOLDER}/${word}.svg`} />
          </td>
        ))}
      </tr>
    </table>
  )

  const RiffView = () => (
    <Box>
      <SvgImage src={`${SVG_FOLDER}/${state.word}.svg`} />
      <BlissWords src={state.words} />
      <Cute src={state.valueOnPlay} />
    </Box>
  )

  const svgStyle = { width: '100px', height: '100px', backgroundColor: state?.color ?? '#000', borderRadius: '25%' }
  const SvgImage = ({ src, ...props }) => <img style={svgStyle} src={src} alt={src} {...props} />

  const RiffPlay = () => {
    const onPlay = () => {
      const bpm = 120
      const playbackRate = 1
      const playOptions = { bpm, humanize: true, playbackRate }
      const notes = state.riff.map(v => Random.noteValues(v))
      new Tone.Sequence((time = Tone.now(), { note, duration = Random.duration(), velocity }) => {
        const color = Random.colorHex()
        const word = Random.arrayElement(SvgUtils.words)
        const words = Array(5)
          .fill(1)
          .map(v => Random.arrayElement(SvgUtils.words))
        reducer({ word, words, color, valueOnPlay: { note, duration, velocity }, isPlaying: true })
        synth.triggerAttackRelease(note, duration, time, velocity)
      }, notes).start(1)
      Tone.Transport.set(playOptions)
      Tone.Transport.start('+0.1')
    }
    const onStop = () => {
      Tone.Transport.stop(0)
      reducer({ isPlaying: false })
    }
    return (
      <>
        <Button disabled={state.isPlaying} label="Play" onClick={onPlay} />
        <Button disabled={!state.isPlaying} label="Stop" onClick={onStop} />
      </>
    )
  }

  //! Settings for generate melody
  const SetupFretboard = () => (
    <>
      <DropSelect
        label="Strings"
        value={state.strings}
        options={[4, 5, 6, 7, 8]}
        onClick={v => reducer({ strings: v })}
      />
      <DropSelect label="Frets" value={state.frets} options={[12, 21, 24]} onClick={v => reducer({ frets: v })} />
      <DropSelect label="Tuning" value={state.tuning} options={TUNING_NAMES} onClick={v => reducer({ tuning: v })} />
    </>
  )

  const SetupRiff = () => (
    <>
      <DropSelect label="Root Note" value={state.rootNote} options={NOTES} onClick={v => reducer({ rootNote: v })} />
      <DropSelect label="Scale" value={state?.scale} options={SCALES} onClick={v => reducer({ scale: v })} />
      <DropSelect
        label="Melody Size"
        value={state.size}
        options={[10, 20, 50, 100, 200]}
        onClick={v => reducer({ size: v })}
      />
      <DropSelect
        label="Sound Instrument"
        value={state?.instrumentName}
        options={Object.keys(SAMPLES)}
        onClick={setInstrument}
      />
    </>
  )

  const SetupButtons = () => <Button disabled={!state.rootNote} label="Generate Riff" onClick={generateRiff} />
  const SetupGuitar = () => (
    <Box direction="row" align="center" gap="medium">
      <SetupFretboard />
      <SetupRiff />
      <SetupButtons />
    </Box>
  )

  return (
    <Box direction="column" align="center" gap="medium">
      <SetupGuitar />
      <Fretboard />
      <RiffPlay />
      <TableRow>
        <ContentView />
        <RiffView />
      </TableRow>
    </Box>
  )
}
