import React from 'react'
import { typesModal } from '../types/types'

export const selectedModal = (heroe) => {
  console.log(heroe);
  return {
      type: typesModal.selected,
      payload: heroe
  }
}
