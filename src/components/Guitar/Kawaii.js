import * as ReactKawaii from 'react-kawaii'
import { Random } from '../helpers'

export const MOODS = ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']
export const genProps = () => ({
  mood: Random.arrayElement(MOODS),
  color: Random.colorHex(),
  size: Random.number(50, 250),
})

export const SpeechBubble = (props = genProps()) => <ReactKawaii.SpeechBubble {...props} />
export const Mug = (props = genProps()) => <ReactKawaii.Mug {...props} />
export const Browser = (props = genProps()) => <ReactKawaii.Browser {...props} />
export const Ghost = (props = genProps()) => <ReactKawaii.Ghost {...props} />
export const Cat = (props = genProps()) => <ReactKawaii.Cat {...props} />
export const IceCream = (props = genProps()) => <ReactKawaii.IceCream {...props} />
export const CreditCard = (props = genProps()) => <ReactKawaii.CreditCard {...props} />
export const File = (props = genProps()) => <ReactKawaii.File {...props} />
export const Backpack = (props = genProps()) => <ReactKawaii.Backpack {...props} />
export const Planet = (props = genProps()) => <ReactKawaii.Planet {...props} />
export const Chocolate = (props = genProps()) => <ReactKawaii.Chocolate {...props} />
export const Folder = (props = genProps()) => <ReactKawaii.Folder {...props} />

export const KawaiiRandom = () =>
  Random.arrayElement([
    <SpeechBubble />,
    <Mug />,
    <Browser />,
    <Ghost />,
    <Cat />,
    <IceCream />,
    <CreditCard />,
    <File />,
    <Backpack />,
    <Planet />,
    <Chocolate />,
    <Folder />,
  ])
