/** @typedef {typeof __propDef.props}  SuseProps */
/** @typedef {typeof __propDef.events}  SuseEvents */
/** @typedef {typeof __propDef.slots}  SuseSlots */
export default class Suse extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SuseProps = typeof __propDef.props
export type SuseEvents = typeof __propDef.events
export type SuseSlots = typeof __propDef.slots
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
