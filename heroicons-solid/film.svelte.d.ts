/** @typedef {typeof __propDef.props}  FilmProps */
/** @typedef {typeof __propDef.events}  FilmEvents */
/** @typedef {typeof __propDef.slots}  FilmSlots */
export default class Film extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FilmProps = typeof __propDef.props
export type FilmEvents = typeof __propDef.events
export type FilmSlots = typeof __propDef.slots
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
