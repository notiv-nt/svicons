/** @typedef {typeof __propDef.props}  BlackTieProps */
/** @typedef {typeof __propDef.events}  BlackTieEvents */
/** @typedef {typeof __propDef.slots}  BlackTieSlots */
export default class BlackTie extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type BlackTieProps = typeof __propDef.props
export type BlackTieEvents = typeof __propDef.events
export type BlackTieSlots = typeof __propDef.slots
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
