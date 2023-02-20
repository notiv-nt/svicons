/** @typedef {typeof __propDef.props}  PlusSmProps */
/** @typedef {typeof __propDef.events}  PlusSmEvents */
/** @typedef {typeof __propDef.slots}  PlusSmSlots */
export default class PlusSm extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PlusSmProps = typeof __propDef.props
export type PlusSmEvents = typeof __propDef.events
export type PlusSmSlots = typeof __propDef.slots
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
