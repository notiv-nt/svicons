/** @typedef {typeof __propDef.props}  YoutubeProps */
/** @typedef {typeof __propDef.events}  YoutubeEvents */
/** @typedef {typeof __propDef.slots}  YoutubeSlots */
export default class Youtube extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type YoutubeProps = typeof __propDef.props
export type YoutubeEvents = typeof __propDef.events
export type YoutubeSlots = typeof __propDef.slots
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
