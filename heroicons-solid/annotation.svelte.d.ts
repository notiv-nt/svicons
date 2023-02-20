/** @typedef {typeof __propDef.props}  AnnotationProps */
/** @typedef {typeof __propDef.events}  AnnotationEvents */
/** @typedef {typeof __propDef.slots}  AnnotationSlots */
export default class Annotation extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AnnotationProps = typeof __propDef.props
export type AnnotationEvents = typeof __propDef.events
export type AnnotationSlots = typeof __propDef.slots
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
