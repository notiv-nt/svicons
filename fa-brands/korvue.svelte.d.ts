/** @typedef {typeof __propDef.props}  KorvueProps */
/** @typedef {typeof __propDef.events}  KorvueEvents */
/** @typedef {typeof __propDef.slots}  KorvueSlots */
export default class Korvue extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type KorvueProps = typeof __propDef.props
export type KorvueEvents = typeof __propDef.events
export type KorvueSlots = typeof __propDef.slots
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
