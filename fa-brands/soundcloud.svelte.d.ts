/** @typedef {typeof __propDef.props}  SoundcloudProps */
/** @typedef {typeof __propDef.events}  SoundcloudEvents */
/** @typedef {typeof __propDef.slots}  SoundcloudSlots */
export default class Soundcloud extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SoundcloudProps = typeof __propDef.props
export type SoundcloudEvents = typeof __propDef.events
export type SoundcloudSlots = typeof __propDef.slots
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
