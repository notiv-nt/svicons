/** @typedef {typeof __propDef.props}  RedhatProps */
/** @typedef {typeof __propDef.events}  RedhatEvents */
/** @typedef {typeof __propDef.slots}  RedhatSlots */
export default class Redhat extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type RedhatProps = typeof __propDef.props
export type RedhatEvents = typeof __propDef.events
export type RedhatSlots = typeof __propDef.slots
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
