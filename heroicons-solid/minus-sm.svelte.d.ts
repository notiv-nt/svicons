/** @typedef {typeof __propDef.props}  MinusSmProps */
/** @typedef {typeof __propDef.events}  MinusSmEvents */
/** @typedef {typeof __propDef.slots}  MinusSmSlots */
export default class MinusSm extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MinusSmProps = typeof __propDef.props
export type MinusSmEvents = typeof __propDef.events
export type MinusSmSlots = typeof __propDef.slots
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
