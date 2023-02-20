/** @typedef {typeof __propDef.props}  QuoraProps */
/** @typedef {typeof __propDef.events}  QuoraEvents */
/** @typedef {typeof __propDef.slots}  QuoraSlots */
export default class Quora extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type QuoraProps = typeof __propDef.props
export type QuoraEvents = typeof __propDef.events
export type QuoraSlots = typeof __propDef.slots
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
