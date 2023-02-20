/** @typedef {typeof __propDef.props}  DiasporaProps */
/** @typedef {typeof __propDef.events}  DiasporaEvents */
/** @typedef {typeof __propDef.slots}  DiasporaSlots */
export default class Diaspora extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type DiasporaProps = typeof __propDef.props
export type DiasporaEvents = typeof __propDef.events
export type DiasporaSlots = typeof __propDef.slots
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
