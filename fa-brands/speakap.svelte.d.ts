/** @typedef {typeof __propDef.props}  SpeakapProps */
/** @typedef {typeof __propDef.events}  SpeakapEvents */
/** @typedef {typeof __propDef.slots}  SpeakapSlots */
export default class Speakap extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SpeakapProps = typeof __propDef.props
export type SpeakapEvents = typeof __propDef.events
export type SpeakapSlots = typeof __propDef.slots
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
