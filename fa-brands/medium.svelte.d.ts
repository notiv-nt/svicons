/** @typedef {typeof __propDef.props}  MediumProps */
/** @typedef {typeof __propDef.events}  MediumEvents */
/** @typedef {typeof __propDef.slots}  MediumSlots */
export default class Medium extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MediumProps = typeof __propDef.props
export type MediumEvents = typeof __propDef.events
export type MediumSlots = typeof __propDef.slots
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
