/** @typedef {typeof __propDef.props}  SpeakerDeckProps */
/** @typedef {typeof __propDef.events}  SpeakerDeckEvents */
/** @typedef {typeof __propDef.slots}  SpeakerDeckSlots */
export default class SpeakerDeck extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SpeakerDeckProps = typeof __propDef.props
export type SpeakerDeckEvents = typeof __propDef.events
export type SpeakerDeckSlots = typeof __propDef.slots
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
