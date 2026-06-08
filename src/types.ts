/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BudgetItem {
  id: string;
  name: string;
  quantityCount: number;
  unitName: string;
  unitPriceUGX: number;
  totalCostUGX: number;
  category: 'construction' | 'equipment';
  description?: string;
}

export interface ProjectChallenge {
  id: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  impactLevel: 'Critical' | 'Severe' | 'High';
}

export interface ProjectObjective {
  id: string;
  title: string;
  details: string;
  metric: string;
  benefit: string;
}

export interface SupportFormInput {
  name: string;
  email: string;
  organization: string;
  role: 'partner' | 'donor' | 'volunteer' | 'supporter';
  message: string;
  selectedItemsToFund: Record<string, number>; // itemId -> quantity funded
}
