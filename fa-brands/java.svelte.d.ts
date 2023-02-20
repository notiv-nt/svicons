/** @typedef {typeof __propDef.props}  JavaProps */
/** @typedef {typeof __propDef.events}  JavaEvents */
/** @typedef {typeof __propDef.slots}  JavaSlots */
export default class Java extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type JavaProps = typeof __propDef.props
export type JavaEvents = typeof __propDef.events
export type JavaSlots = typeof __propDef.slots
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
