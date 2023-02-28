import * as ReactKawaii from 'react-kawaii'
import { Random } from '../../utils/helpers'

export const MOODS = ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']

type TProps = ReactKawaii.KawaiiProps
export const genProps = (p?: Partial<TProps>): TProps => ({
  mood: Random.arrayElement(MOODS),
  color: Random.colorHex(),
  size: Random.number(50, 250),
  ...p,
})

export const SpeechBubble = ({ ...props }: TProps) => <ReactKawaii.SpeechBubble {...props} />
export const Mug = ({ ...props }: TProps) => <ReactKawaii.Mug {...props} />
export const Browser = ({ ...props }: TProps) => <ReactKawaii.Browser {...props} />
export const Ghost = ({ ...props }: TProps) => <ReactKawaii.Ghost {...props} />
export const Cat = ({ ...props }: TProps) => <ReactKawaii.Cat {...props} />
export const IceCream = ({ ...props }: TProps) => <ReactKawaii.IceCream {...props} />
export const CreditCard = ({ ...props }: TProps) => <ReactKawaii.CreditCard {...props} />
export const File = ({ ...props }: TProps) => <ReactKawaii.File {...props} />
export const Backpack = ({ ...props }: TProps) => <ReactKawaii.Backpack {...props} />
export const Planet = ({ ...props }: TProps) => <ReactKawaii.Planet {...props} />
export const Chocolate = ({ ...props }: TProps) => <ReactKawaii.Chocolate {...props} />
export const Folder = ({ ...props }: TProps) => <ReactKawaii.Folder {...props} />
