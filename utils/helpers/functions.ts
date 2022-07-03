//  function to truncate(cut) the string if the length of given string
//  bigger than  given number(n)
export function truncate(string: string, n: number) {
	return string.length > n ? `${string.substr(0, n - 1)}....` : string
}
