/** @typedef {typeof __propDef.props}  FastForwardProps */
/** @typedef {typeof __propDef.events}  FastForwardEvents */
/** @typedef {typeof __propDef.slots}  FastForwardSlots */
export default class FastForward extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FastForwardProps = typeof __propDef.props
export type FastForwardEvents = typeof __propDef.events
export type FastForwardSlots = typeof __propDef.slots
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
