import { ref, onMounted } from 'vue'

export default function getBrands() {
  const brands = ref([])
  const getBrands = async () => {
    brands.value = await fetch('http://localhost:8000/brands')
  }

  onMounted(getBrands)

  return {
    brands,
    getBrands
  }
}