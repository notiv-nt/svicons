/** @typedef {typeof __propDef.props}  YahooProps */
/** @typedef {typeof __propDef.events}  YahooEvents */
/** @typedef {typeof __propDef.slots}  YahooSlots */
export default class Yahoo extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type YahooProps = typeof __propDef.props
export type YahooEvents = typeof __propDef.events
export type YahooSlots = typeof __propDef.slots
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
