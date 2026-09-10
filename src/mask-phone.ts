/**
 * Máscara de telefone reutilizável (KDUW-3): 11 dígitos → (00) 00000-0000, 10 dígitos → (00) 0000-0000.
 * Resultado tipado: tamanho diferente é erro declarado, não uma máscara pela metade.
 */
export type PhoneMaskReason = 'EMPTY' | 'INVALID_LENGTH';

export type PhoneMaskResult = { valid: true; masked: string; digits: string } | { valid: false; reason: PhoneMaskReason };

export function maskPhone(input: string): PhoneMaskResult {
  const digits = input.replace(/\D+/g, '');
  if (digits.length === 0) return { valid: false, reason: 'EMPTY' };
  if (digits.length === 11) return { valid: true, digits, masked: `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}` };
  if (digits.length === 10) return { valid: true, digits, masked: `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}` };
  return { valid: false, reason: 'INVALID_LENGTH' };
}
