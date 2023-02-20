/** @typedef {typeof __propDef.props}  LastfmProps */
/** @typedef {typeof __propDef.events}  LastfmEvents */
/** @typedef {typeof __propDef.slots}  LastfmSlots */
export default class Lastfm extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LastfmProps = typeof __propDef.props
export type LastfmEvents = typeof __propDef.events
export type LastfmSlots = typeof __propDef.slots
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
