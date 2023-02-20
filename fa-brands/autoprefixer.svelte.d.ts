/** @typedef {typeof __propDef.props}  AutoprefixerProps */
/** @typedef {typeof __propDef.events}  AutoprefixerEvents */
/** @typedef {typeof __propDef.slots}  AutoprefixerSlots */
export default class Autoprefixer extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AutoprefixerProps = typeof __propDef.props
export type AutoprefixerEvents = typeof __propDef.events
export type AutoprefixerSlots = typeof __propDef.slots
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
