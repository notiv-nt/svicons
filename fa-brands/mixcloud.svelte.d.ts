/** @typedef {typeof __propDef.props}  MixcloudProps */
/** @typedef {typeof __propDef.events}  MixcloudEvents */
/** @typedef {typeof __propDef.slots}  MixcloudSlots */
export default class Mixcloud extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MixcloudProps = typeof __propDef.props
export type MixcloudEvents = typeof __propDef.events
export type MixcloudSlots = typeof __propDef.slots
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
