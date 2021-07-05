export default class StringTransform {
  static snakeCaseToCamelCase(input: string) {
    return input
      .split('_')
      .reduce(
        (res, word, i) =>
          i === 0
            ? word.toLowerCase()
            : `${res}${word.charAt(0).toUpperCase()}${word
                .substr(1)
                .toLowerCase()}`,
        '',
      )
  }

  static modelSnakeCaseToCamelCase<T = any>(value: any): T {
    let result = {} as any

    Object.keys(value).forEach((key) => {
      result[this.snakeCaseToCamelCase(key)] = value[key]
    })

    return result as T
  }
}
