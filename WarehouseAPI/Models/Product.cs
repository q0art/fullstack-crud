using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WarehouseAPI.Models;

public class Product
{
    [Key] 
    public int Id { get; set; }

    [Required] 
    [Column(TypeName = "nvarchar(100)")]
    public string Name { get; set; } = "";

    [Required]
    [Column(TypeName = "nvarchar(1000)")]
    public string Description { get; set; } = "";

    [Required]
    [Range(1, 10000, ErrorMessage = "Invalid Price.")]
    public decimal Price { get; set; } = 100;

    [Range(1, 10000, ErrorMessage = "Invalid Quantity.")]
    public int Quantity { get; set; } = 100;
    
    public DateTime CreateAt { get; set; } = DateTime.Now;
}