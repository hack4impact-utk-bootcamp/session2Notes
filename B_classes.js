
class Point
{
   constructor(x, y){
       this.x = x
       this.y = y
   }

   print()
   {
       console.log(`(${this.x}, ${this.y})`)
   }

   _getDistanceFromOrigin(){
       console.log(Math.hypot(this.x, this.y))
   }

   static distance(p1, p2)
   {
       return Math.hypot((p1.x-p2.x), (p2.y-p2.y))
   }
}

let point = new Point(1 , 2)
let point2 = new Point(-1, -3)

point.print()
point2.print()
point2._getDistanceFromOrigin()

console.log(Point.distance(point, point2))