function func(a, b, c){
    if (a == 0){
        return 'ошибка'
    }
    else{
        let discriminant = b * b - 4 * a * c
        if (discriminant < 0) {
            return 'Уравнение не имеет реальных корней';
        } else if (discriminant === 0) {
            return 'Уравнение имеет один корень: ' + (-b / (2 * a));
        } else {
            var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return 'Уравнение имеет два корня: ' + root1 + ' и ' + root2;
        }
    }
}
console.log(func(1, 3, 2))