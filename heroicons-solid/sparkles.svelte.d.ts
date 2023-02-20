/** @typedef {typeof __propDef.props}  SparklesProps */
/** @typedef {typeof __propDef.events}  SparklesEvents */
/** @typedef {typeof __propDef.slots}  SparklesSlots */
export default class Sparkles extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SparklesProps = typeof __propDef.props
export type SparklesEvents = typeof __propDef.events
export type SparklesSlots = typeof __propDef.slots
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
