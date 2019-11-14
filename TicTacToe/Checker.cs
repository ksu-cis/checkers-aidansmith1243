using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicTacToe
{
    public enum Color
    {
        Red,
        Black
    }
    public struct Coordinates
    {
        public int x;
        public int y;
    }

    public class Checker
    {
        public Color Color { get; set;  }

        public bool King { get; set; }

        public Coordinates Coords;

        public Checker(Color color, int x, int y, bool king = false)
        {
            Color = color;
            Coords.x = x;
            Coords.y = y;
            King = king;
        }
    }
}
