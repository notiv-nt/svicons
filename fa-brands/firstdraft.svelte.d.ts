/** @typedef {typeof __propDef.props}  FirstdraftProps */
/** @typedef {typeof __propDef.events}  FirstdraftEvents */
/** @typedef {typeof __propDef.slots}  FirstdraftSlots */
export default class Firstdraft extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type FirstdraftProps = typeof __propDef.props
export type FirstdraftEvents = typeof __propDef.events
export type FirstdraftSlots = typeof __propDef.slots
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
