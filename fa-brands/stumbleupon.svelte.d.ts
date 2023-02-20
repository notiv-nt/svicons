/** @typedef {typeof __propDef.props}  StumbleuponProps */
/** @typedef {typeof __propDef.events}  StumbleuponEvents */
/** @typedef {typeof __propDef.slots}  StumbleuponSlots */
export default class Stumbleupon extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type StumbleuponProps = typeof __propDef.props
export type StumbleuponEvents = typeof __propDef.events
export type StumbleuponSlots = typeof __propDef.slots
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
