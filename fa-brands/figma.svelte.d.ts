/** @typedef {typeof __propDef.props}  FigmaProps */
/** @typedef {typeof __propDef.events}  FigmaEvents */
/** @typedef {typeof __propDef.slots}  FigmaSlots */
export default class Figma extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FigmaProps = typeof __propDef.props
export type FigmaEvents = typeof __propDef.events
export type FigmaSlots = typeof __propDef.slots
import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
  props: {
    [x: string]: any
  }
  events: {
    [evt: string]: CustomEvent<any>
  }
  slots: {}
}
export {}
