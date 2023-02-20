/** @typedef {typeof __propDef.props}  KaggleProps */
/** @typedef {typeof __propDef.events}  KaggleEvents */
/** @typedef {typeof __propDef.slots}  KaggleSlots */
export default class Kaggle extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type KaggleProps = typeof __propDef.props
export type KaggleEvents = typeof __propDef.events
export type KaggleSlots = typeof __propDef.slots
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
