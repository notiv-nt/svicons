/** @typedef {typeof __propDef.props}  GlideProps */
/** @typedef {typeof __propDef.events}  GlideEvents */
/** @typedef {typeof __propDef.slots}  GlideSlots */
export default class Glide extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type GlideProps = typeof __propDef.props
export type GlideEvents = typeof __propDef.events
export type GlideSlots = typeof __propDef.slots
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
