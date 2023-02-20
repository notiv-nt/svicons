/** @typedef {typeof __propDef.props}  AsymmetrikProps */
/** @typedef {typeof __propDef.events}  AsymmetrikEvents */
/** @typedef {typeof __propDef.slots}  AsymmetrikSlots */
export default class Asymmetrik extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AsymmetrikProps = typeof __propDef.props
export type AsymmetrikEvents = typeof __propDef.events
export type AsymmetrikSlots = typeof __propDef.slots
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
