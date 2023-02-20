/** @typedef {typeof __propDef.props}  PhotographProps */
/** @typedef {typeof __propDef.events}  PhotographEvents */
/** @typedef {typeof __propDef.slots}  PhotographSlots */
export default class Photograph extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PhotographProps = typeof __propDef.props
export type PhotographEvents = typeof __propDef.events
export type PhotographSlots = typeof __propDef.slots
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
