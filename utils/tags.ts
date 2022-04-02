export const allTags = [
  // 'Practical recommendations',
	// 'Housing / shelter',
	// 'Maps',
	// 'Medical help',
	'Help',
	'News',
	'Report the enemy',
	'Cyber frontier'
] as const

export type Tag = typeof allTags[number]

