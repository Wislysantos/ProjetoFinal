﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoFinal.Models {
    public class Estadia {
        
        [Key]
        public int EstadiaID { get; set; }

        [Required]
        [Column(TypeName = "DateTime")]
        public DateTime DataDeEntrada { get; set; }

        [Required]
        [Column(TypeName = "DateTime")]
        public DateTime DataDeSaida { get; set; }

        public int QuartoID { get; set; }
        [ForeignKey("QuartoID")]
        public virtual Quarto Quarto { get; set; }


    }
}
