import * as ReactKawaii from 'react-kawaii';
import { Random } from '../helpers';

export const MOODS = ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko'];

export const genProps = () => ({
  mood: Random.arrayElement(MOODS),
  color: Random.colorHex(),
  size: Random.number(50, 250),
});

export const SpeechBubble = (props = genProps()) => (
  <ReactKawaii.SpeechBubble size={100} color={Random.colorHex()} {...props} />
);
export const Mug = (props = genProps()) => <ReactKawaii.Mug size={100} color={Random.colorHex()} {...props} />;
export const Browser = (props = genProps()) => <ReactKawaii.Browser size={100} color={Random.colorHex()} {...props} />;
export const Ghost = (props = genProps()) => <ReactKawaii.Ghost size={100} color={Random.colorHex()} {...props} />;
export const Cat = (props = genProps()) => <ReactKawaii.Cat size={100} color={Random.colorHex()} {...props} />;
export const IceCream = (props = genProps()) => (
  <ReactKawaii.IceCream size={100} color={Random.colorHex()} {...props} />
);
export const CreditCard = (props = genProps()) => (
  <ReactKawaii.CreditCard size={100} color={Random.colorHex()} {...props} />
);
export const File = (props = genProps()) => <ReactKawaii.File size={100} color={Random.colorHex()} {...props} />;
export const Backpack = (props = genProps()) => (
  <ReactKawaii.Backpack size={100} color={Random.colorHex()} {...props} />
);
export const Planet = (props = genProps()) => <ReactKawaii.Planet size={100} color={Random.colorHex()} {...props} />;
export const Chocolate = (props = genProps()) => (
  <ReactKawaii.Chocolate size={100} color={Random.colorHex()} {...props} />
);
export const Folder = (props = genProps()) => <ReactKawaii.Folder size={100} color={Random.colorHex()} {...props} />;

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
  ]);
