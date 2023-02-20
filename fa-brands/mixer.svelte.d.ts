/** @typedef {typeof __propDef.props}  MixerProps */
/** @typedef {typeof __propDef.events}  MixerEvents */
/** @typedef {typeof __propDef.slots}  MixerSlots */
export default class Mixer extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MixerProps = typeof __propDef.props
export type MixerEvents = typeof __propDef.events
export type MixerSlots = typeof __propDef.slots
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
