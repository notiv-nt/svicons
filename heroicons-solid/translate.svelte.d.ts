/** @typedef {typeof __propDef.props}  TranslateProps */
/** @typedef {typeof __propDef.events}  TranslateEvents */
/** @typedef {typeof __propDef.slots}  TranslateSlots */
export default class Translate extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TranslateProps = typeof __propDef.props
export type TranslateEvents = typeof __propDef.events
export type TranslateSlots = typeof __propDef.slots
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
