import { ref, onMounted } from '@vue/composition-api'

export default function brandsList() {
  const brands = ref([])
  const getBrandsList = async () => {
    const data = await fetch('http://localhost:8000/brands').then(data => data.json())
    brands.value = data
  }

  onMounted(getBrandsList)

  return {
    brands
  }
}