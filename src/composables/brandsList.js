import { ref, onMounted } from '@vue/composition-api'

export default function brandsList() {
  const brands = ref([])
  const getBrandsList = async () => {
    brands.value = await fetch('http://localhost:8000/brands')
  }

  onMounted(getBrandsList)

  return {
    brands,
    getBrandsList
  }
}