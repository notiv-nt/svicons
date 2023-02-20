/** @typedef {typeof __propDef.props}  SassProps */
/** @typedef {typeof __propDef.events}  SassEvents */
/** @typedef {typeof __propDef.slots}  SassSlots */
export default class Sass extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SassProps = typeof __propDef.props
export type SassEvents = typeof __propDef.events
export type SassSlots = typeof __propDef.slots
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
