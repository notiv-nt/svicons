/** @typedef {typeof __propDef.props}  PuzzleProps */
/** @typedef {typeof __propDef.events}  PuzzleEvents */
/** @typedef {typeof __propDef.slots}  PuzzleSlots */
export default class Puzzle extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PuzzleProps = typeof __propDef.props
export type PuzzleEvents = typeof __propDef.events
export type PuzzleSlots = typeof __propDef.slots
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
