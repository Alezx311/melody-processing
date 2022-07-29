declare module 'teoriajs' {
	export const Teoria: import('../node_modules/teoria')

	export const Chord: import('../node_modules/teoria/lib/chord')
	export const Interval: import('../node_modules/teoria/lib/interval')
	export const Note: import('../node_modules/teoria/lib/note')
	export const Scale: import('../node_modules/teoria/lib/scale')

	export default Teoria
}
