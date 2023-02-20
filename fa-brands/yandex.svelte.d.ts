/** @typedef {typeof __propDef.props}  YandexProps */
/** @typedef {typeof __propDef.events}  YandexEvents */
/** @typedef {typeof __propDef.slots}  YandexSlots */
export default class Yandex extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type YandexProps = typeof __propDef.props
export type YandexEvents = typeof __propDef.events
export type YandexSlots = typeof __propDef.slots
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
