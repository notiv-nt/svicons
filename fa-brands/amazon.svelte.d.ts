/** @typedef {typeof __propDef.props}  AmazonProps */
/** @typedef {typeof __propDef.events}  AmazonEvents */
/** @typedef {typeof __propDef.slots}  AmazonSlots */
export default class Amazon extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AmazonProps = typeof __propDef.props
export type AmazonEvents = typeof __propDef.events
export type AmazonSlots = typeof __propDef.slots
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
